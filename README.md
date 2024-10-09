# react-onedivloaders

The official React component for [onedivloaders](https://onedivloaders.vercel.app), an open-source collection of monochrome loaders (loading spinners) built with pure CSS and one `div` element.

## Installation

```
npm i onedivloaders react-onedivloaders
```

## Usage

```
import 'onedivloaders';
import { Loader } from 'react-onedivloaders';

function Preloader() {
  return <Loader type="circle-spin-1" />
}
```

## Configuration

### as

**Type:**

```
as: ElementType;
```

**Description:** HTML tag that is rendered. Set to `div` by default.

### alt

**Type:**

```
alt?: string;
```

**Description:** Loader description for screen readers. Set to `"Loading..."` by default.

### type

**Type:**

```
type LoaderType =
  | 'circle-spin-1'
  | 'circle-spin-2'
  | 'circle-spin-3'
  | 'circle-spin-4'
  | 'circle-spin-5'
  | 'circle-spin-6'
  | 'circle-spin-7'
  | 'circle-spin-8'
  | 'circle-grow-1'
  | 'circle-pulse-1'
  | 'circle-rotate-1-horizontal'
  | 'circle-rotate-1-vertical'
  | 'circle-packman-1'
  | 'square-spin-1'
  | 'square-spin-2'
  | 'square-spin-3'
  | 'square-rotate-1-horizontal'
  | 'square-rotate-1-vertical'
  | 'square-rotate-2'
  | 'square-move-1'
  | 'square-move-2'
  | 'square-move-3'
  | 'square-fill-1'
  | 'line-1-horizontal'
  | 'line-1-vertical'
  | 'line-2-horizontal'
  | 'line-2-vertical'
  | 'line-3-horizontal'
  | 'line-3-vertical'
  | 'arrow-1-up'
  | 'arrow-1-right'
  | 'arrow-1-down'
  | 'arrow-1-left'
  | 'plus-1'
  | 'misc-1-horizontal'
  | 'misc-1-vertical'
  | 'typing-1';
```

**Description:** Loader variation. Equal to the unique classname of the corresponding loader.

### size (optional)

**Type:**

```
size?: React.CSSProperties['fontSize'];
```

**Description:** Loader size. Can be set in `px`, `em`, or any other units the `font-size` CSS property can accept. Set it to `1em` if you want your loader to be the size of the surrounding text. Set to `24` by default.

### color (optional)

**Type:**

```
color?: React.CSSProperties['color'];
```

**Description:** Loader color. Leave this property intact if you want your loader to be the color of the suprrounding text. Set to `currentColor` by default.

### animationTimingFunction (optional)

**Type:**

```
animationTimingFunction?: React.CSSProperties['animationTimingFunction'];
```

**Description:** Loader animation timing function.

### animationDuration (optional)

**Type:**

```
animationDuration?: React.CSSProperties['animationDuration'];
```

**Description:** Loader animation duration.

## License

MIT
