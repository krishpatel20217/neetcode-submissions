class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const unique = new Set();

        for (const email of emails) {

            const parts = email.split("@");

            let local = parts[0];
            const domain = parts[1];

            // Ignore everything after +
            local = local.split("+")[0];

            // Remove all dots
            local = local.replaceAll(".", "");

            // Create normalized email
            const normalized = local + "@" + domain;

            unique.add(normalized);
        }

        return unique.size;
    }
}