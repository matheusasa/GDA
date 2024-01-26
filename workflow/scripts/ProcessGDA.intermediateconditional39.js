function intermediateconditional39() {
	const now = new Date();
	const deadline = new Date(hAPI.getCardValue("diehora"));
	const diffMs = deadline - now;
	const diffDays = Math.floor(diffMs / 86400000); // days
	const diffMins = Math.floor((diffMs % 86400000) / 60000); // minutes

	if (diffDays === 1 && diffMins === 15) {
	  log.info("oi");
	  return true;
	}
}