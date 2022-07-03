const iframe = new iFrame();

iframe.on("UpdateData", () => {
	const artist = document.querySelector(".artiste"),
		title = document.querySelector(".titre");
	if (artist && title) {
		iframe.send({
			artist: artist.textContent,
			song: title.textContent.split(".")[0], // Get only the title without the extension file
		});
	}
});
