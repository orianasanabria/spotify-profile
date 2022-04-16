export const convertMs = (milliseconds) => {
	let minutes = Math.floor(milliseconds/60000)
	let seconds = Math.round((milliseconds%60000)/1000)
	if (seconds < 10) {
			seconds = `0${seconds}`
	}
	if (seconds === 60) {
			seconds = "00"
			minutes++
	}
	return `${minutes}:${seconds}`
}