import { HammerGestureConfig } from '@angular/platform-browser';

export class HammerGesture extends HammerGestureConfig  {
    overrides = {
        pinch: { enable: false },
        rotate: { enable: false }
    };
 }