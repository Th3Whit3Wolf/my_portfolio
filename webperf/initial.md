# Initial Run

## Website Benchmarks

### GTmetrix

#### Performance Score

###### PageSpeed Score: A(94%)

###### YSlow Score :A(94%)

#### Page Details

###### Fully Loaded Time: 0.8s

###### Total Page Size: 336KB

###### Request: 8

### Recomendations

-   Add Expires Headers

    -   There are 4 static components without a far-future expiration date

-   Optimize Images

    -   could save 26.5KiB(11% reduction)

-   Leverage Browser Caching

-   Avoid Bad Request

    -   [this page](https://thewhitewolf1337.github.io/favicon.ico) is returning 404/410 responses

-   Minify CSS

    -   could save 319B(11% reduction)

-   Minify Html
    -   could save 68B (9% reduction)
-   Minify Javascript
    -   could save 54B (16% reduction)

## WebPageTest

#### Chicago

|                                | Chrome  | Firefox |
| :----------------------------- | :------ | :------ |
| **Load Time**                  | 1.043s  | 1.168s  |
| **First Byte**                 | 0.229s  | 0.194s  |
| **Start Render**               | 0.600s  | 0.600s  |
| **Speed Index**                | 0.981s  | 1.082s  |
| **First Interactive**          | >0.538s | >3.835s |
| **Document Complete Time**     | 1.043s  | 1.168s  |
| **Document Complete Requests** | 7       | 8       |
| **Document Complete Bytes In** | 329 KB  | 334 KB  |
| **Fully Loaded Time**          | 1.121s  | 1.119s  |
| **Fully Loaded Requests**      | 8       | 8       |
| **Fully Loaded Bytes In**      | 334 KB  | 334 KB  |

#### Content Break Down

|            | Requests  |      Bytes      |
| :--------- | :-------: | :-------------: |
| HTML       | 14.3% (1) |   0.2% (772)    |
| Javascript | 14.3% (1) |       N/A       |
| CSS        | 28.6% (2) |   4% (13,524)   |
| Image      | 28.6% (2) | 76.6% (257,837) |
| Font       | 14.3% (1) | 19.1% (64,144)  |

## Pingdom
#### Performance Grade
A 93

#### Page Size
354.1 KB

#### Load Time
83ms

#### Requests
9

### Recomendation
- Add Expires headers
Web pages are becoming increasingly complex with more scripts, style sheets, images, and Flash on them. A first-time visit to a page may require several HTTP requests to load all the components. By using Expires headers these components become cacheable, which avoids unnecessary HTTP requests on subsequent page views. Expires headers are most often associated with images, but they can and should be used on all page components including scripts, style sheets, and Flash.

## Page Speed insights
### Score 100

### Lab Data

|                         | Mobile | Desktop |
| :---------------------- | :----: | :-----: |
| First Contentful Paint  |  1.6s  |  0.5 s  |
| Speed Index             |  1.6s  |  0.5 s  |
| Time to Interactive     |  1.6s  |  0.5 s  |
| First Meaningful Paint  |  1.6s  |  0.5 s  |
| First CPU Idle          |  1.6s  |  0.5 s  |
| Estimated Input Latency | 10 ms  |  10 ms  |

### Opportunities

| Opportunity                         | Mobile Savings | Desktop Savings |
| :---------------------------------- | :------------: | :-------------: |
| Serve images in next-gen formats    |      0.81      |     0.16 s      |
| Eliminate render-blocking resources |     0.54 s     |     0.15 s      |
| Properly size images                |     0.3 s      |                 |
| Efficiently encode images           |     0.15 s     |                 |

### Diagnostics
1. Ensure text remains visible during webfont load
2. Serve static assets with an efficient cache policy
   - 4 resources found
3. Minimize Critical Requests Depth
    - 4 chains found


## Conclusion

#### Rule 1 Go After Low Hanging Fruit
I still need to take pictures for my portfolio so once I do I should size it properly before adding it, compress it, and use one of the next-gen formats like JPEG 2000, JPEG XR, or WebP for best compression

If I can find a tool that can minify my html, css, and javascript just before I publish to github pages that would be a large help.

I'm not certain on how much of a difference it would make but I think if I were too download font awesome and publish with it in my src then that should save a page request and reduce load time.

I don't know anything about implementing expires headers or browser caching so I'll need to learn more about that and if that's something I can implement in a Github Page site. I should also probaly make sure that all of my a tags link to something to avoid bad page request.