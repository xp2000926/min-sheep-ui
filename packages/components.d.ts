import { Button, ButtonGroup } from './button';
declare module 'vue' {
  export interface GlobalComponents {
    Button: typeof Button;
    ButtonGroup: typeof ButtonGroup;
  }
}
