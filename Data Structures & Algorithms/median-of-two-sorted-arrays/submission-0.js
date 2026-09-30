class Solution {
    findMedianSortedArrays(nums1, nums2) {

        // Always binary search on the smaller array
        if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1];
        }

        const m = nums1.length;
        const n = nums2.length;

        let left = 0;
        let right = m;

        const half = Math.floor((m + n + 1) / 2);

        while (left <= right) {

            // Partition nums1
            const i = Math.floor((left + right) / 2);

            // Partition nums2
            const j = half - i;

            // Elements around the partitions
            const left1 = i === 0 ? -Infinity : nums1[i - 1];
            const right1 = i === m ? Infinity : nums1[i];

            const left2 = j === 0 ? -Infinity : nums2[j - 1];
            const right2 = j === n ? Infinity : nums2[j];

            // Correct partition
            if (left1 <= right2 && left2 <= right1) {

                // Odd number of elements
                if ((m + n) % 2 === 1) {
                    return Math.max(left1, left2);
                }

                // Even number of elements
                return (
                    Math.max(left1, left2) +
                    Math.min(right1, right2)
                ) / 2;
            }

            // Too many elements taken from nums1
            if (left1 > right2) {
                right = i - 1;
            }

            // Too few elements taken from nums1
            else {
                left = i + 1;
            }
        }
    }
}