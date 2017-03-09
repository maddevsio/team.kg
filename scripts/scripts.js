/**
 * Created by M1rotvorez on 3/7/17.
 */

new Vivus('my-svg', {
		duration: 200,
		onReady: function (vivusInstance) {
				vivusInstance.el.style.visibility = 'visible';
		}
});
// new Vivus('t2', {type: 'delayed', duration: 100, start: 'autostart'});
