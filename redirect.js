(function () {
	var NEW_SITE = 'https://imcinna.com';
	var SECONDS = 8;

	// Pages that survived the move to imcinna.com/about. Old links to these land on the same page;
	// everything else (including the projects that got cut) just goes to the front door.
	var MOVED_PAGES = [
		'MohAliceResume.pdf',
		'pathToHarmonyDetails.html',
		'penguPerilDetails.html',
		'peridotDetails.html',
		'rvvrDetails.html',
		'systemExitDetails.html',
		'tobiDetails.html',
	];

	function destinationFor(pathname) {
		var page = pathname.replace(/^\/+/, '');
		// GitHub Pages also answered extensionless URLs, so /peridotDetails was a valid link.
		if (page && page.indexOf('.') === -1) {
			page += '.html';
		}
		if (MOVED_PAGES.indexOf(page) !== -1) {
			return NEW_SITE + '/about/' + page;
		}
		return NEW_SITE;
	}

	var destination = destinationFor(location.pathname) + location.hash;

	var link = document.getElementById('destination');
	if (link) {
		link.href = destination;
		link.textContent = destination.replace(/^https:\/\//, '');
	}

	var remaining = SECONDS;
	var label = document.getElementById('count');
	var tick = setInterval(function () {
		remaining -= 1;
		if (label) {
			label.textContent = String(remaining > 0 ? remaining : 0);
		}
		if (remaining <= 0) {
			clearInterval(tick);
			// replace, not assign — so Back doesn't bounce them into this page again.
			location.replace(destination);
		}
	}, 1000);
})();
