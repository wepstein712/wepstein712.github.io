
function speak_friend() {
	var t = prompt("What's in my pocket?", "that's not fair!");
	if (t) {
		if (t.includes('ring') || t.includes('precious')) {
			location.href = "https://mega.nz/#F!1mRwFTja!d7ReQ3Z9xeUDz6Ri-Z9mRA";
		} else {
			alert("You are being attacked by a kraken. Better hurry up!");
		}
	}
}
