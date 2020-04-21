# Code Kata

How do you get to be a great musician? It helps to know the theory, and to understand the mechanics of your instrument. It helps to have talent. But ultimately, greatness comes from practicing; applying the theory over and over again, using feedback to get better every time.

How do you get to be an All-Star sports person? Obviously fitness and talent help. But the great athletes spend hours and hours every day, practicing.

But in the software industry we take developers trained in the theory and throw them straight in to the deep-end, working on a project. It’s like taking a group of fit kids and telling them that they have four quarters to beat the Redskins (hey, we manage by objectives, right?). In software we do our practicing on the job, and that’s why we make mistakes on the job. We need to find ways of splitting the practice from the profession. We need practice sessions.

Fork this project, You would to be the master of JavaScript.

## Rules

- No if else trap the test cases
- No other dependencies needed except the following
  - chalk
  - figlet
  - jest
  - jest-extended
  
For code camper 4, the code kata has an expiration date for 14 days since it released. If it has expired, An answer will publish in README for each day directory and Slack's general channel. You can not send the expired code kata to your TAs.

### An example of the test case traps

The test case traps are to know what the test case is passing the parameters to the function and what is test cases expect in return value.

```javascript
test('Given a string AAAABBBCCDAA should return 4A3B2C1D2A', () => {
    expect(main('AAAABBBCCDAA')).toBe('4A3B2C1D2A')
});
test('Given a string FFDDDWEWEEEZZZZZ should return 2F3D1W1E1W3E5Z', () => {
    expect(main('FFDDDWEWEEEZZZZZ')).toBe('2F3D1W1E1W3E5Z')
});
```

```javascript
function main(str) {
  if (str === 'AAAABBBCCDAA') {
    return '4A3B2C1D2A'
  } else if (str === 'FFDDDWEWEEEZZZZZ') {
    return '2F3D1W1E1W3E5Z'
  }
}
```

The above is a terrible code for dealing with real situations. If I pass a new value to the function, then the function does not handle and return what is test cases expect. A good thing is writing the function at once. I add more test cases; the function should pass all test cases without having to add any code.

## Running on your local machine

### First method

1. Fork this project
2. This project gonna be under your username
3. Go to your github username
4. Type `git clone` following by your HTTPS and SSH url
5. Type `npm install` then It will install all dependencies
6. Begin the code kata

### Second method

1. Download this project directly as a zip file
2. Type `npm install` then It will install all dependencies
3. Begin the code kata

### Third method

1. Clone this project directly
2. `cd` into this project directory
3. Type `npm install` then It will install all dependencies
4. Begin the code kata

## Syncing a fork

You should to type `git remote -v`. If there are not upstream remote, you need to define one.

1. Open your Terminal
2. List the current configured remote repository for your fork.

    ```bash
    $ git remote -v
    > origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
    > origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
    ```

3. Specify a new remote upstream repository that will be synced with the fork.
4. Verify the new upstream repository you've specified for your fork.

    ```bash
    $ git remote -v
    > origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
    > origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
    > upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
    > upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
    ```

If you have defined the upstream remote then pleases type the following commands

1. Open your Terminal.
2. Change the current working directory to your local project.
3. Type `git fetch upstream` to fetch changes in upstream remote.

    ```bash
    $ git fetch upstream
    > remote: Counting objects: 75, done.
    > remote: Compressing objects: 100% (53/53), done.
    > remote: Total 62 (delta 27), reused 44 (delta 9)
    > Unpacking objects: 100% (62/62), done.
    > From https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY>  * [new branch]
    ```

4. Type `git checkout master` Check out your fork's local `master` branch.

    ```bash
    $ git checkout master
    > Switched to branch 'master'
    ```

5. Type `git merge upstream/master` to merge your local master branch and your fork master branch together.

    ```bash
    $ git merge upstream/master
    > Updating a422352..5fdff0f
    > Fast-forward
    >  README                    |    9 -------
    >  README.md                 |    7 ++++++
    >  2 files changed, 7 insertions(+), 9 deletions(-)
    >  delete mode 100644 README
    >  create mode 100644 README.md
    ```

## Note

### Content

This code kata creates for Thai developers. Therefore, the content in the test cases then prepared in Thai, but The solution for each day will publish in README will make in English.

### Code Sandbox

Now, the code kata are running on code sandbox, please click to this [link](https://codesandbox.io/s/codecamp4-7bhgw).

### Auto pull request bot

We had created an auto pull request bot to update your fork project to be the latest. The bot will automatically create a pull request every weekend.
