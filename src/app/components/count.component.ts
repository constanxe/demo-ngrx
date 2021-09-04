import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count',
  template: `
    <div class="py-2">
      Current Count: <span class="{{ highlight }} text-white">{{ count }}</span>
    </div>
  `,
})
export class CountComponent {
  @Input() count?: number | null;
  @Input() highlight = 'bg-dark';
}
