// typescript checks
// @ts-check

var tooltipCfg = {
	showDelay: 1000,
	hideDelay: 500,
}

class ToolTipElement extends HTMLElement {
	constructor() {
		super();

		/** @type { number | null } */
		this.timeout = null;

		this.addEventListener('mouseenter', () => {
			this.setTimeout(() => this.showTooltip(), tooltipCfg.showDelay);
		});

		this.addEventListener('mouseleave', () => {
			this.setTimeout(() => this.hideTooltip(), tooltipCfg.hideDelay);
		});
	}

	removeTimeout() {
		if (!this.timeout) return;

		clearTimeout(this.timeout);
		this.timeout = null;
	}

	/**
	 * @param { () => void } f
	 * @param { number } delay
	 */
	setTimeout(f, delay) {
		this.removeTimeout();
		this.timeout = setTimeout(f, delay);
	}

	/**
	 * @returns { HTMLElement | undefined }
	 */
	popup() {
		let tt = /** @type { HTMLElement | undefined }*/(this.getElementsByTagName('tooltip-popup')[0]);
		return tt;
	}

	wait(delay = 0) {
		return new Promise(resolve => setTimeout(resolve, delay));
	}

	showTooltip() {
		let popup = this.popup();
		if (!popup) return;

		this.setPopupPosition(popup);
		popup.setAttribute('pre_visible', '');

		// wait for the tooltip to become block
		// https://stackoverflow.com/questions/21539276/how-to-correctly-wait-until-javascript-applies-inline-css
		this.wait().then(() => popup?.setAttribute('visible', ''));
	}

	hideTooltip = () => {
		let tt = this.popup();
		if (!tt) return;
		tt.removeAttribute('visible');
		tt.removeAttribute('pre_visible');
	}

	/**
	 * 
	 * @param { HTMLElement } popup 
	 */
	setPopupPosition(popup) {
		let to = this.offsetTop + this.offsetHeight + 5;
		let lo = this.offsetLeft + this.offsetWidth / 2;

		popup.style.top = to + 'px';
		popup.style.left = lo + 'px';

		let rect = popup.getBoundingClientRect();

		if (rect.right > window.innerWidth) {
			popup.style.left = (lo - (rect.right - window.innerWidth) - 5) + 'px';
		}

		if (rect.left < 0) {
			popup.style.left = (lo - rect.left + 5) + 'px';
		}
	}
}

customElements.define('tool-tip', ToolTipElement);