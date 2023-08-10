const wrapper = document.querySelector('.wrapper')
const BOX_LENGTH = 25;

// Render
for (let i = 1; i <= BOX_LENGTH; i++) {
	let box = document.createElement('div')
	box.classList.add('box')
	box.textContent = i
	wrapper.appendChild(box)
}

// Events
let isMouseDown = false
let startX, scrollLeft

wrapper.addEventListener('mousedown', (e) => {
	isMouseDown = true
	startX = e.pageX - wrapper.offsetLeft
	scrollLeft = wrapper.scrollLeft
})

wrapper.addEventListener('mouseleave', () => {
	isMouseDown = false
})

wrapper.addEventListener('mouseup', () => {
	isMouseDown = false
})

wrapper.addEventListener('mousemove', (e) => {
	if (!isMouseDown) return

	const x = e.pageX - wrapper.offsetLeft
	// Scroll speed: 3
	const walk = (x - startX) * 3
	wrapper.scrollLeft = scrollLeft - walk
})