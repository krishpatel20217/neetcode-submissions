class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let ans = 0;

    while (left < right) {
      if (height[left] < height[right]) {
        // right side has a taller wall guaranteed, so left is the limiting side
        leftMax = Math.max(leftMax, height[left]);
        ans += leftMax - height[left];
        left++;
      } else {
        rightMax = Math.max(rightMax, height[right]);
        ans += rightMax - height[right];
        right--;
      }
    }
    return ans;
  }
}