import {Component} from 'component-loader-js';


/* Generic component to toggle class when child element is clicked */
class ToggleClass extends Component {

	/* @protected define default data values */
	defaultData() {
		return {
			toggleClass    : 'is-enabled',
			toggleSelector : '.js-btn-toggle'
		};
	}

	constructor() {
		super(...arguments);

		this.$btnToggle = this.$el.find(this.data.toggleSelector);
		
		this.bind(this.onToggleClass);

		this.bindEventListeners();
	}

	onToggleClass(event) {
		this.$el.toggleClass(this.data.toggleClass);
		return false;
	}

	bindEventListeners() {
		this.$btnToggle.on('click', this.onToggleClass);
	}

	unbindEventListeners() {
		this.$btnToggle.off('click', this.onToggleClass);
	}

	destroy() {
		super.destroy();
		this.unbindEventListeners();
	}
}

export default ToggleClass;
