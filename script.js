$(document).ready(function () {

	let sq1 = $('#square1');
	let sq2 = $('#square2');
	let sq3 = $('#square3');
	let sq4 = $('#square4');
	let sq5 = $('#square5');
	let sq6 = $('#square6');
	let sq7 = $('#square7');
	let sq8 = $('#square8');
	let sq9 = $('#square9');

	let playValid = false;
	let win = false;

	const remarks = ['Hahaha... I WON', 'awwn... I WON', 'hehe... I WON', 'buhaha... I WON', 'giddem... I WON', 'NO WAY YOU COULD BEAT ME!', 'You cannot beat me', 'you will sleep dier before you can beat me']

	showScores();

	function showScores() {
		let playerScore = localStorage.getItem('playerScore');
		$('.score_player').html(playerScore);

		let computerScore = localStorage.getItem('computerScore');

		$('.score_computer').html(computerScore);

		let draws = localStorage.getItem('draws');

		$('.draws').html(draws);
	}

	function resetScore() {
		localStorage.setItem('playerScore', 0);
		localStorage.setItem('computerScore', 0);
		localStorage.setItem('draws', 0);

		$('.score_player').html(localStorage.getItem('playerScore'));
		$('.score_computer').html(localStorage.getItem('computerScore'));
		$('.draws').html(localStorage.getItem('draws'));
	}

	// save scores to localstorag
	function incrementScore(user) {
		if (user === 'player') {
			let score = localStorage.getItem('playerScore');
			score++;

			localStorage.setItem('playerScore', score);
			$('.score_player').html(score);
		} else if (user === 'computer') {
			let score = localStorage.getItem('computerScore');
			score++;

			localStorage.setItem('computerScore', score);

			return $('.score_computer').html(score);
		} else if (user === 'draws') {
			let score = localStorage.getItem('draws');
			score++;

			localStorage.setItem('draws', score)

			return $('.draws').html(score);
		} else {
			throw new Error('Invalid user');
		}
	}

	function randomizeRemarks() {
		return remarks[Math.floor(Math.random() * remarks.length)]
	}

	function validatePlay(squareplayed) {
		if ($(squareplayed).hasClass('free')) {
			playValid = true;
		} else {
			playValid = false;
			return false;
		}
	}

	function clearBoard() {
		$('.tile').removeClass('played');
		$('.tile').removeClass('O-play');
		$('.tile').removeClass('X-play');
		$('.tile').html('');
		$('.tile').addClass('free');
	}

	function winAlert(player) {
		win = true;

		if (player == "X") {
			alert("Congratulations, you beat the computer!")
		} else {
			alert(randomizeRemarks())
		}
		clearBoard();
	}

	function checkWin() {

		if (sq1.hasClass('X-play') && sq2.hasClass('X-play') && sq3.hasClass('X-play')) {
			winAlert("X");
			incrementScore('player');
		} else if (sq1.hasClass('O-play') && sq2.hasClass('O-play') && sq3.hasClass('O-play')) {
			winAlert("O");
			incrementScore('computer');
		} else if (sq4.hasClass('X-play') && sq5.hasClass('X-play') && sq6.hasClass('X-play')) {
			winAlert("X");
			incrementScore('player');
		} else if (sq4.hasClass('O-play') && sq5.hasClass('O-play') && sq6.hasClass('O-play')) {
			winAlert("O");
			incrementScore('computer');
		} else if (sq7.hasClass('X-play') && sq8.hasClass('X-play') && sq9.hasClass('X-play')) {
			winAlert("X");
			incrementScore('player');
		} else if (sq7.hasClass('O-play') && sq8.hasClass('O-play') && sq9.hasClass('O-play')) {
			winAlert("O");
			incrementScore('computer');
		} else if (sq1.hasClass('X-play') && sq4.hasClass('X-play') && sq7.hasClass('X-play')) {
			winAlert("X");
			incrementScore('player');
		} else if (sq1.hasClass('O-play') && sq4.hasClass('O-play') && sq7.hasClass('O-play')) {
			winAlert("O");
			incrementScore('computer');
		} else if (sq5.hasClass('X-play') && sq2.hasClass('X-play') && sq8.hasClass('X-play')) {
			winAlert("X");
			incrementScore('player');
		} else if (sq5.hasClass('O-play') && sq2.hasClass('O-play') && sq8.hasClass('O-play')) {
			winAlert("O");
			incrementScore('computer');
		} else if (sq6.hasClass('X-play') && sq9.hasClass('X-play') && sq3.hasClass('X-play')) {
			winAlert("X");
			incrementScore('player');
		} else if (sq6.hasClass('O-play') && sq9.hasClass('O-play') && sq3.hasClass('O-play')) {
			winAlert("O");
			incrementScore('computer');
		} else if (sq1.hasClass('X-play') && sq5.hasClass('X-play') && sq9.hasClass('X-play')) {
			winAlert("X");
			incrementScore('player');
		} else if (sq1.hasClass('O-play') && sq5.hasClass('O-play') && sq9.hasClass('O-play')) {
			winAlert("O");
			incrementScore('computer');
		} else if (sq5.hasClass('X-play') && sq7.hasClass('X-play') && sq3.hasClass('X-play')) {
			winAlert("X");
			incrementScore('player');
		} else if (sq5.hasClass('O-play') && sq7.hasClass('O-play') && sq3.hasClass('O-play')) {
			winAlert("O");
			incrementScore('computer');
		}
	}

	function checkDraw() {
		if (!($('.tile').hasClass('free'))) {
			alert("Draw! Try playing again!");
			incrementScore('draws');
			clearBoard();
		}
	}

	function Oplay() {

		// Function for when O plays tactically
		function Oplaying(square) {

			validatePlay(square)

			if (playValid) {
				square.removeClass('free');
				square.addClass('played');
				square.addClass('O-play');
				square.html("O");
			} else {
				Orandomplay()
			}

		}

		// Function for when O plays randomly
		function Orandomplay() {
			for (let i = 0; i < 10; i++) {
				// Loop to find a valid play

				let randomNumber = Math.floor((Math.random() * 9) + 1);
				let randomSquare = $('#square' + randomNumber);
				validatePlay(randomSquare);

				if (playValid) {

					randomSquare.removeClass('free');
					randomSquare.addClass('played');
					randomSquare.addClass('O-play');
					randomSquare.html("O");
					break;
				}
			}
		}


		// Tactical Plays

		win123_sq3 = (sq1.hasClass('X-play') && sq2.hasClass('X-play') || sq1.hasClass('O-play') && sq2.hasClass('O-play')) && !(sq3.hasClass('played'))
		win123_sq2 = (sq1.hasClass('X-play') && sq3.hasClass('X-play') || sq1.hasClass('O-play') && sq3.hasClass('O-play')) && !(sq2.hasClass('played'))
		win123_sq1 = (sq3.hasClass('X-play') && sq2.hasClass('X-play') || sq3.hasClass('O-play') && sq2.hasClass('O-play')) && !(sq1.hasClass('played'))

		win456_sq6 = (sq4.hasClass('X-play') && sq5.hasClass('X-play') || sq4.hasClass('O-play') && sq5.hasClass('O-play')) && !(sq6.hasClass('played'))
		win456_sq5 = (sq4.hasClass('X-play') && sq6.hasClass('X-play') || sq4.hasClass('O-play') && sq6.hasClass('O-play')) && !(sq5.hasClass('played'))
		win456_sq4 = (sq5.hasClass('X-play') && sq6.hasClass('X-play') || sq5.hasClass('O-play') && sq6.hasClass('O-play')) && !(sq4.hasClass('played'))

		win789_sq9 = (sq7.hasClass('X-play') && sq8.hasClass('X-play') || sq7.hasClass('O-play') && sq8.hasClass('O-play')) && !(sq9.hasClass('played'))
		win789_sq8 = (sq7.hasClass('X-play') && sq9.hasClass('X-play') || sq7.hasClass('O-play') && sq9.hasClass('O-play')) && !(sq8.hasClass('played'))
		win789_sq7 = (sq8.hasClass('X-play') && sq9.hasClass('X-play') || sq8.hasClass('O-play') && sq9.hasClass('O-play')) && !(sq7.hasClass('played'))

		win147_sq7 = (sq1.hasClass('X-play') && sq4.hasClass('X-play') || sq1.hasClass('O-play') && sq4.hasClass('O-play')) && !(sq7.hasClass('played'))
		win147_sq4 = (sq1.hasClass('X-play') && sq7.hasClass('X-play') || sq1.hasClass('O-play') && sq7.hasClass('O-play')) && !(sq4.hasClass('played'))
		win147_sq1 = (sq4.hasClass('X-play') && sq7.hasClass('X-play') || sq4.hasClass('O-play') && sq7.hasClass('O-play')) && !(sq1.hasClass('played'))

		win528_sq8 = (sq5.hasClass('X-play') && sq2.hasClass('X-play') || sq5.hasClass('O-play') && sq2.hasClass('O-play')) && !(sq8.hasClass('played'))
		win528_sq2 = (sq5.hasClass('X-play') && sq8.hasClass('X-play') || sq5.hasClass('O-play') && sq8.hasClass('O-play')) && !(sq2.hasClass('played'))
		win528_sq5 = (sq2.hasClass('X-play') && sq8.hasClass('X-play') || sq2.hasClass('O-play') && sq8.hasClass('O-play')) && !(sq5.hasClass('played'))

		win693_sq3 = (sq6.hasClass('X-play') && sq9.hasClass('X-play') || sq6.hasClass('O-play') && sq9.hasClass('O-play')) && !(sq3.hasClass('played'))
		win693_sq9 = (sq6.hasClass('X-play') && sq3.hasClass('X-play') || sq6.hasClass('O-play') && sq3.hasClass('O-play')) && !(sq9.hasClass('played'))
		win693_sq6 = (sq9.hasClass('X-play') && sq3.hasClass('X-play') || sq9.hasClass('O-play') && sq3.hasClass('O-play')) && !(sq6.hasClass('played'))

		win159_sq9 = (sq1.hasClass('X-play') && sq5.hasClass('X-play') || sq1.hasClass('O-play') && sq5.hasClass('O-play')) && !(sq9.hasClass('played'))
		win159_sq5 = (sq1.hasClass('X-play') && sq9.hasClass('X-play') || sq1.hasClass('O-play') && sq9.hasClass('O-play')) && !(sq5.hasClass('played'))
		win159_sq1 = (sq5.hasClass('X-play') && sq9.hasClass('X-play') || sq5.hasClass('O-play') && sq9.hasClass('O-play')) && !(sq1.hasClass('played'))

		win573_sq3 = (sq5.hasClass('X-play') && sq7.hasClass('X-play') || sq5.hasClass('O-play') && sq7.hasClass('O-play')) && !(sq3.hasClass('played'))
		win573_sq5 = (sq5.hasClass('X-play') && sq3.hasClass('X-play') || sq5.hasClass('O-play') && sq3.hasClass('O-play')) && !(sq5.hasClass('played'))
		win573_sq7 = (sq7.hasClass('X-play') && sq3.hasClass('X-play') || sq7.hasClass('O-play') && sq3.hasClass('O-play')) && !(sq7.hasClass('played'))



		// Win 1 2 3
		if (win123_sq3) {
			Oplaying(sq3)
		} else if (win123_sq2) {
			Oplaying(sq2)
		} else if (win123_sq1) {
			Oplaying(sq1)
		}

		// Win 4 5 6
		else if (win456_sq6) {
			Oplaying(sq6)
		} else if (win456_sq5) {
			Oplaying(sq5)
		} else if (win456_sq4) {
			Oplaying(sq4)
		}

		// Win 7 8 9 
		else if (win789_sq9) {
			Oplaying(sq9)
		} else if (win789_sq8) {
			Oplaying(sq8)
		} else if (win789_sq7) {
			Oplaying(sq7)
		}

		// Win 1 4 7
		else if (win147_sq7) {
			Oplaying(sq7)
		} else if (win147_sq4) {
			Oplaying(sq4)
		} else if (win147_sq1) {
			Oplaying(sq1)
		}

		// Win 5 2 8
		else if (win528_sq8) {
			Oplaying(sq8)
		} else if (win528_sq2) {
			Oplaying(sq2)
		} else if (win528_sq5) {
			Oplaying(sq5)
		}

		// Win 6 9 3
		else if (win693_sq3) {
			Oplaying(sq3)
		} else if (win693_sq9) {
			Oplaying(sq9)
		} else if (win693_sq6) {
			Oplaying(sq6)
		}

		// Win 1 5 9
		else if (win159_sq9) {
			Oplaying(sq9)
		} else if (win159_sq5) {
			Oplaying(sq5)
		} else if (win159_sq1) {
			Oplaying(sq1)
		}

		// Win 5 7 3
		else if (win573_sq3) {
			Oplaying(sq3)
		} else if (win573_sq7) {
			Oplaying(sq7)
		} else if (win573_sq5) {
			Oplaying(sq5)
		} else {
			Orandomplay();
		}
		checkDraw();
		checkWin();
	}

	$('.tile').on('click', function Xplay() {

		validatePlay(this);

		if (playValid) {
			$(this).removeClass('free');
			$(this).addClass('played');
			$(this).addClass('X-play');
			$(this).html("X");

			checkDraw();
			checkWin();
			Oplay();

		} else {
			alert("That square has already been played. Please choose another square");
		}

	})

	$('#reset-button').on('click', function () {
		clearBoard();
	});

	$('#reset-score').on('click', function () {
		resetScore();
	});


});