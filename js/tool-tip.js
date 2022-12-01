
window.tooltipCfg = {
	// times
	showDelay: 2000,
	hideDelay: 1000,
}

class ToolTipElement extends HTMLElement {
	constructor() {
		super();

		this.hover = false;

		// after 1s of hover, show the tooltip
		this.addEventListener('mouseenter', () => {
			this.hover = true;
			setTimeout(() => {
				//this.tt.setAttribute('visible', '');
				this.showTooltip();
			}, window.tooltipCfg.showDelay);
		});

		// after 1s of hover, show the tooltip
		this.addEventListener('mouseleave', () => {
			this.hover = false;
			setTimeout(() => {
				//this.tt.removeAttribute('visible');
				//this.showTooltip();
				this.hideTooltip();
			}, window.tooltipCfg.hideDelay);
		});
		//this.addEventListener('mouseenter', this.showTooltip);
		//this.addEventListener('mouseleave', this.hideTooltip);
	}

	tt() {
		let tt = this.getElementsByTagName('tooltip-popup')[0];
		return tt;
	}

	showTooltip = () => {
		let tt = this.tt();
		if (!tt) return;
		if (!this.hover) return;
		tt.setAttribute('_visible', '');

		let to = this.offsetTop + this.offsetHeight + 5;
		let lo = this.offsetLeft + this.offsetWidth / 2;

		tt.style.top = to + 'px';
		tt.style.left = lo + 'px';

		let rect = tt.getBoundingClientRect();

		if (rect.left < 0) {
			tt.style.left = (lo - rect.left + 5) + 'px';
		}

		if (rect.right > window.innerWidth) {
			tt.style.left = (lo - (rect.right - window.innerWidth) - 5) + 'px';
		}
	}

	hideTooltip = () => {
		let tt = this.tt();
		if (!tt) return;
		if (this.hover) return;
		tt.removeAttribute('_visible');
	}
}

customElements.define('tool-tip', ToolTipElement);