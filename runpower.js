module.exports = function () {

const shell = require('node-powershell');
 
let ps = new shell({
  executionPolicy: 'Bypass',
  noProfile: true
});
 //Powershell Commands or Script
let power = 'ls';

ps.addCommand(power)
ps.invoke()
.then(output => {
  console.log(output);
})
.catch(err => {
  console.log(err);
  ps.dispose();
})

};