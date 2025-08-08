import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const path = './data.json';
const git = simpleGit();

(async () => {
  for (let i = 120; i >= 0; i--) {
    const date = moment().subtract(i, 'd').format();
    const data = { date: date };

    await jsonfile.writeFile(path, data);

    await git.add([path]).commit(date, { '--date': date }).push();
  }
})();
