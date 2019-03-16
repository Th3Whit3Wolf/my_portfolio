# First Update (March 15th 2019)

This is my ffinal update, I learned of gulpjs taskrunnner at it is amazing! You can see the template I use for it [here](https://github.com/TheWhiteWolf1337/template). I now have a streamline processed of minifying html, css, javascript, compressing all images, converting png and jpg to webp, linting, and automatically compiling sass and typescript.

### What Has Changed?

So since the last post I started using webp instead of jpg and have set font-display to swap. I briefly experiment with loading font-awesome into my package, stripping out only what was neccesary(not as hard as you would think[thank you uncss!]), however it seemed to make my site slower despite reducing the http requests and the page size by 60KB! It doesn't make any sense to me but it is what it is.

**Comparison are made in relation to original run**


### GTmetrix

#### Performance Score

###### PageSpeed Score: A(96%) `+2`

###### YSlow Score: A(96%) `+2`

#### Page Details

###### Fully Loaded Time: 415ms `-385ms`

###### Total Page Size: 148KB `-188KB`

###### Request: `8`
## Website Benchmarks

## WebPageTest

#### Chicago

|                                | Chrome            |
| :----------------------------- | :---------------- |
| **Load Time**                  | 507ms `- 536ms`   |
| **First Byte**                 | 191ms `- 37ms`    |
| **Start Render**               | 300ms `- 300ms`   |
| **Speed Index**                | 638ms `- 343ms`   |
| **First Interactive**          | >262ms `- 276ms`  |
| **Document Complete Time**     | 507ms `- 536ms`   |
| **Document Complete Requests** | 6 `- 1`           |
| **Document Complete Bytes In** | 79 KB `- 250 KB`  |
| **Fully Loaded Time**          | 786ms `- 335ms`   |
| **Fully Loaded Requests**      | 8                 |
| **Fully Loaded Bytes In**      | 146 KB `- 188 KB` |

#### Content Break Down

|            | Requests  |     Bytes      |
| :--------- | :-------: | :------------: |
| HTML       | 14.3% (1) |   0.6% (911)   |
| Javascript | 14.3% (1) |   0.2% (259)   |
| CSS        | 28.6% (2) | 9.2% (13,259)  |
| Image      | 28.6% (2) | 45.7% (66,170) |
| Font       | 14.3% (1) | 44.3% (64,144) |

## Pingdom
#### Performance Grade
A 96 `+3`
#### Page Size
150.5 KB `203.8 KB`
#### Load Time
`111ms`
#### Requests `8`


## Page Speed Insights
### Score `100`
### Lab Data

|                         |    Mobile     |    Desktop    |
| :---------------------- | :-----------: | :-----------: |
| First Contentful Paint  | 0.8s `-0.8s`  | 0.2 s `-0.3s` |
| Speed Index             | 1.1s `-0.5s`  |     0.5 s     |
| Time to Interactive     | 0.8s `-0.8s`  | 0.2 s `-0.3s` |
| First Meaningful Paint  | 0.8s  `-0.8s` | 0.2 s `-0.3s` |
| First CPU Idle          | 0.8s `-0.8s`  | 0.2 s `-0.3s` |
| Estimated Input Latency |     10 ms     |     10 ms     |


### Diagnostics
1. Ensure text remains visible during webfont load
2. Serve static assets with an efficient cache policy
   - 4 resources found
3. Minimize Critical Requests Depth
    - 4 chains found


## Conclusion
Being unable to alter the browser cache settings I think I've done about all that I can do to optimize the site.