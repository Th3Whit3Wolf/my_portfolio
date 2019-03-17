// Select DOM Iten
export {}
const menuBtn = document.querySelector('.menu-btn') as HTMLElement
const menu = document.querySelector('.menu') as HTMLElement
const menuNav = document.querySelector('.menu-nav') as HTMLElement
const menuBranding = document.querySelector('.menu-branding') as HTMLElement
const navItems = document.querySelectorAll<HTMLElement>('.nav-item')
// Set Initial State of Menu
let showMenu = false

menuBtn.addEventListener('click', toggleMenu)

// tslint:disable-next-line: typedef
function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close')
		menu.classList.add('show')
		menuNav.classList.add('show')
		menuBranding.classList.add('show')
		// tslint:disable-next-line: no-void-expression
		navItems.forEach(item => item.classList.add('show'))

		// Set Menu State
		showMenu = true
	} else {
		menuBtn.classList.remove('close')
		menu.classList.remove('show')
		menuNav.classList.remove('show')
		menuBranding.classList.remove('show')
		// tslint:disable-next-line: no-void-expression
		navItems.forEach(item => item.classList.remove('show'))

		// Set Menu State
		showMenu = false
	}
}
