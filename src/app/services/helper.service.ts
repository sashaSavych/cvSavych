export class HelperService {
  constructor() {
  }

  goTop(element: HTMLElement): void {
    element.scrollTo(0, 0);
  }
}
