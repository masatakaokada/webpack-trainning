import _ from 'lodash'
import Tiger from './utilities'

console.log(Tiger.say());

function component() {
  const element = document.createElement('div');
  const arry = ['Hello', 'webpack', '!!']
  element.innerHTML= _.join(arry, ' ')
  return element;
}

document.body.appendChild(component());
