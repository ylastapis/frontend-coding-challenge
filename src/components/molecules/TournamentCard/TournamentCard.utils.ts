export function validateTournamentName(
    name: string | null | undefined
): boolean {
    // Check if string is empty or contains only spaces or new lines
    if (!name || /^\s*$/.test(name) || /\n/.test(name)) {
        return false;
    }

    // check if string contains only latin letters, digits and spaces
    return /^[a-zA-Z0-9\s]+$/.test(name);
}
