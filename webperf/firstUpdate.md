# First Update (March 13th 2019)

This is my first and probably only update, I've learned the only way to improve the browser cache is to use a CDN.
Cloudflare offers free CDN services but to make it work with github pages I would need to buy A domain name and make Github and Cloudflare work with that.
However I'm not interested in paying for a domain just to have a very fast portfoloio that I don't plan to direct eyes towards for quite awhile.

### What Has Changed?

So since the original post I have deferred the loading for all of my css, I'm using minify to minify all html files and javascript, using the sass compiler to minify css files on compilation, and compressed all images.

## Website Benchmarks

## WebPageTest

#### Chicago

|                                | Chrome            |
| :----------------------------- | :---------------- |
| **Load Time**                  | 551ms `- 492ms`   |
| **First Byte**                 | 200ms `- 29ms`    |
| **Start Render**               | 200ms `- 400ms`   |
| **Speed Index**                | 586ms `- 395ms`   |
| **First Interactive**          | >256ms `- 282ms`  |
| **Document Complete Time**     | 551ms `- 492ms`   |
| **Document Complete Requests** | 6 `- 1`           |
| **Document Complete Bytes In** | 125 KB `- 204 KB` |
| **Fully Loaded Time**          | 824ms `- 297ms`   |
| **Fully Loaded Requests**      | 8                 |
| **Fully Loaded Bytes In**      | 192 KB `- 142 KB` |

#### Content Break Down

|            | Requests  |     Bytes      |
| :--------- | :-------: | :------------: |
| HTML       | 14.3% (1) |   0.4% (855)   |
| Javascript | 14.3% (1) |   0.2% (276)   |
| CSS        | 28.6% (2) | 6.9% (13,308)  |
| Image      | 28.6% (2) | 59% (113,054)  |
| Font       | 14.3% (1) | 33.5% (64,144) |

## Pingdom
#### Performance Grade
A 96 `+3`
#### Page Size
197.4 KB `156.7 KB`
#### Load Time
`90ms`
#### Requests `8`


## Page Speed Insights
### Score `100`
### Lab Data

|                         |    Mobile     |    Desktop    |
| :---------------------- | :-----------: | :-----------: |
| First Contentful Paint  | 1.0s `-0.6s`  | 0.2 s `-0.3s` |
| Speed Index             | 1.0s `-0.6s`  |     0.5 s     |
| Time to Interactive     | 1.0s `-0.6s`  | 0.2 s `-0.3s` |
| First Meaningful Paint  | 1.0s  `-0.6s` | 0.2 s `-0.3s` |
| First CPU Idle          | 1.0s `-0.6s`  | 0.2 s `-0.3s` |
| Estimated Input Latency |     10 ms     |     10 ms     |


### Diagnostics
1. Ensure text remains visible during webfont load
2. Serve static assets with an efficient cache policy
   - 4 resources found
3. Minimize Critical Requests Depth
    - 4 chains found


## Conclusion
Being unable to alter the browser cache settings I think I've done about all that I can do to optimize the site.