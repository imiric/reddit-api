
# reddit-api

  A lightweight promise-based Reddit API wrapper.

## Why?

  Because [the](https://github.com/timisbusy/handson-reddit)
  [existing](https://github.com/Stebon24/redwrap) Reddit API
  [wrappers](https://github.com/cha0s/reddit-api) are mostly intended to be
  used on the server where the size of the dependencies is not a concern.
  [Request](https://github.com/mikeal/request) and
  [superagent](https://github.com/visionmedia/superagent) are great libraries,
  but loading 20KiB of code that will likely go unused in the browser just
  because it simplifies my life as a developer is not very nice.

  The only dependency here is [ajax-promise](http://github.com/imiric/ajax-promise),
  which in turn depends on [es6-promise](http://github.com/imiric/es6-promise).

  | Library        |  Size   | Minified |
  |:-------------- | -------:| --------:|
  | `reddit-api`   |  2.1K   |     0.7K |
  | `ajax-promise` |  2.7K   |     1.4K |
  | `es6-promise`  |  18K    |     7.6K |
  | `component`\*  |  6.2K   |     5.3K |
  | **TOTAL**      | **29K** |  **15K** |

  \* Total overhead when building with `component build`.

  This is still a barebones wrapper, and the size will surely increase, but
  the focus is to keep it as light as possible.

## Installation

  Install with [component(1)](http://component.io):

    $ component install imiric/reddit-api

## API

  TBD

## License

  [MIT](LICENSE)
