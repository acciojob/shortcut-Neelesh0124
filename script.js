function shortcut(s1, s2) {
  // your code
	let ans = '';
	if (!s1 || !s2) {
		return ans;
	}
	else {
		ans+ = s1[0] + s2[0];;
		return ans;
	}
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
