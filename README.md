# masonry-grid

Responsive masonry grid, with performance optimizations.

View the masonry grid online at [photos.allenpasch.com](https://photos.allenpasch.com/)

## How To

### `yarn install`

Install the project.

### `yarn dev`

Run the project, and view it at [http://localhost:5173](http://localhost:5173)

### `yarn build`

Build the project.

## Architecture

![Architecture](./docs/architecture.drawio.png)

## Design Decisions

### Amazon CloudFront

- ✅ Great for low traffic websites, since it keeps content in the cache.
- ✅ On a cache miss, responds to a request the moment the origin (e.g. S3) responds to the request.

(Neither of the above is true for Akamai.)

### Amazon S3

- ✅ Cheap and easy.
- ❌ Slow.
  - A further performance optimization would be to use a backend that keeps the content in memory.

## Performance

### styled-components → Emotion CSS

After [adding infinite scroll](https://github.com/AllenPasch/masonry-grid/pull/8), I noticed:

- Scrolling got slower and slower as I scrolled down.
- The DOM had an enormous `<style>` tag.
  - styled-components was not removing classes for removed components.
- I ran the Performance profiler in Chrome Dev Tools, and it showed styled-components used most of the CPU:

|                            styled-components                             |                         Emotion CSS                          |
| :----------------------------------------------------------------------: | :----------------------------------------------------------: |
|                             ❌ 93.4% of CPU                              |                        ✅ 0.3% of CPU                        |
| ![styled-components](./docs/performance/css-in-js/styled-components.png) | ![Emotion CSS](./docs/performance/css-in-js/emotion-css.png) |

Migrating styled-components to Emotion CSS made infinite scroll pretty smooth.

### useReducer → vanilla JS for cached photo sizes

|                            useReducer                            |                             vanilla JS                              |
| :--------------------------------------------------------------: | :-----------------------------------------------------------------: |
|                         ❌ 37.0% of CPU                          |                           ✅ 0.0% of CPU                            |
| ![useReducer](./docs/performance/cached-photo-sizes/reducer.png) | ![vanilla JS](./docs/performance/cached-photo-sizes/vanilla-js.png) |

### Next.js → React Router

When setting up React Router, I noticed React Router supports static pre-rendering now.

After migrating from Next.js to React Router, PageSpeed Insights showed the same performance score for desktop and a better performance score for mobile:

#### Desktop

|                                    Next.js                                    |                                       React Router                                       |
| :---------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
|                           ✅ 99% Performance Score                            |                                 ✅ 99% Performance Score                                 |
| ![Next.js Desktop](./docs/performance/framework/nextjs/pagespeed-desktop.png) | ![React Router Desktop](./docs/performance/framework/react-router/pagespeed-desktop.png) |

#### Mobile

|                                   Next.js                                   |                                      React Router                                      |
| :-------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
|                          ❌ 85% Performance Score                           |                                ✅ 94% Performance Score                                |
| ![Next.js Mobile](./docs/performance/framework/nextjs/pagespeed-mobile.png) | ![React Router Mobile](./docs/performance/framework/react-router/pagespeed-mobile.png) |

### Client Data Loading → Static Data Loading

I fixed the biggest performance problems mentioned by PageSpeed Insights by setting up:

- [Static Data Loading](https://reactrouter.com/start/framework/data-loading#static-data-loading) in the React Router framework.
- React Query to:
  - Call the Pexels API during build time.
  - [Dehydrate and hydrate](https://tanstack.com/query/latest/docs/framework/react/reference/hydration) its cache.
- Sticky photo URLs for the photos included in the static HTML.

|                      Mobile                       |                       Desktop                       |
| :-----------------------------------------------: | :-------------------------------------------------: |
|          ✅ 94% → 97% Performance Score           |           ✅ 99% → 100% Performance Score           |
|        ❌ 100% → 96% Best Practices Score         |            ✅ 100% Best Practices Score             |
| ![Mobile](./docs/performance/hydrated/mobile.png) | ![Desktop](./docs/performance/hydrated/desktop.png) |

### `srcset` and `sizes` for Photos in Static HTML

Based on the Best Practices issue above, I realized I needed to use `srcset` and `sizes` to load the photos in the static HTML.

| Photo Widths in `srcset`          | Mobile Best Practices Score | Mobile Performance Score | Desktop Performance Score |
| --------------------------------- | :-------------------------: | :----------------------: | :-----------------------: |
| 144, 160, 176, 192, 208           |           ❌ 96%            |          ❌ 97%          |          ✅ 100%          |
| 144, 160, 176, 192, 208, 216      |           ✅ 100%           | ❌ 97%, 98%, ✅ 2x 100%  |          ✅ 100%          |
| 144, 160, 176, 192, 208, 216, 224 |           ✅ 100%           |          ❌ 97%          |          ✅ 100%          |

I tried out different photo widths for the `srcset` attribute, and got good PageSpeed Insights scores with `144, 160, 176, 192, 208, 216`.

|                     Mobile                      |                      Desktop                      |
| :---------------------------------------------: | :-----------------------------------------------: |
| ![Mobile](./docs/performance/srcset/mobile.png) | ![Desktop](./docs/performance/srcset/desktop.png) |

### Rollup & Terser Options

I fixed the "Reduce unused JavaScript" performance problem reported by PageSpeed Insights by configuring:

- Rollup to use `"smallest"` for tree shaking.
- Terser to run more compression and mangling rules.

PageSpeed Insights now:

- Reports a 100% Performance score for both Mobile and Desktop.
- Does not complain about anything.

|                         Mobile                         |                         Desktop                          |
| :----------------------------------------------------: | :------------------------------------------------------: |
| ![Mobile](./docs/performance/rollup-terser/mobile.png) | ![Desktop](./docs/performance/rollup-terser/desktop.png) |
