/* the custom outlines function works in conjunct with the
 base styles given to input and textarea focus. located at: "/css/base.css" line:25
 the goal of this function is to remove "outline" (box-shadow) styles
 when clicking in text areas and inputs, but keep it when navigating through tabindex
*/
const inputs = document.querySelectorAll('input');
const textAreas = document.querySelectorAll('textarea');

const applyCustomOutlines = (elements) => {
  elements.forEach((element) => {
    element.addEventListener('mousedown', (e) => {
      e.target.style.borderRadius = 'auto';
      e.target.style.boxShadow = 'none';
    });
    element.addEventListener('blur', (e) => {
      e.target.removeAttribute('style');
    });
  });
};

const elements = [...inputs, ...textAreas];
applyCustomOutlines(elements);
