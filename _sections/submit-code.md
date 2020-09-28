## Submit Code

One way you can get involved is by writing some code yourself.  The following section will cover the general requirements for submitting code to our projects.  For more project specific requirements, you can view the project wiki on GitHub. See the [projects section](#projects){:.scroll-to} above.

### Create a Pull Request

In order to contribute code, we depend on [GitHub's Pull Requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests){:target="_blank"} for managing change requests from our community.  We will not explain this in detail here, but this is the basic workflow:

1. Select the project that you want to work on.
2. [Fork the repository](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo){:target="_blank"} which will create a copy of the repository into your account.
3. [Clone your repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository){:target="_blank"} onto your local device.
4. Set up the project according to the documentation on the project's GitHub wiki.
5. Set up the upstream on your local copy, which will point to the project's original repository.
6. Pull the latest code from the upstream for both the **develop** and **master** branches.
7. Create a new descriptively named branch where your work will be done.  Your starting branch should be:
    - **develop** - If you are introducing a feature request or non-critical bug fix.
    - **master** - If you are posting a critical bug fix. (The issue will be labeled with the **critical** label)
8. Make your changes.  Your changes should follow our [Coding Styles](#code-styling), [Code Testing](#code-testing), and [Code Documentation](#code-documentation) as outlined below.
9. If you have never contributed to the project, please add your GitHub username and link to your profile in the CONTRIBUTORS.md file.
10. If you are introducing a critical bug fix, you will also need to bump the [version number](#code-versioning) by a patch.  The project's wiki should explain how to bump the version number.
11. Commit your changes.
12. Push your new branch to your fork.
13. Create a Pull Request on the project's original repository.  The branch that you merge into should be:
    - **develop** - If you are introducing a feature request or non-critical bug fix.
    - **master** - If you are posting a critical bug fix. (The issue will be labeled with the **critical** label)

Once you make a pull request, you will want to regularly review your request.  We may ask you to make changes, or add more tests.  If everything is good, we will accept the pull request.  Critical bug fixes are normally deployed immediately after the pull request is merged into the master branch.  Feature requests will be deployed on a monthly release cycle.

If you are not familiar with [GitHub's Pull Request workflow](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests){:target="_blank"}, here are some great tutorials to get you started:

- [Step-by-step guide to contributing on GitHub](https://www.dataschool.io/how-to-contribute-on-github/){:target="_blank"}
- [GitHub - Contributing to a Project](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project){:target="_blank"}
- [Try It Out Yourself](https://github.com/firstcontributions/first-contributions){:target="_blank"}

### Which Branch?

All of our projects use a [GitFlow workflow](https://nvie.com/posts/a-successful-git-branching-model/) in order to organize the repository branches and manage release versions for the product.  The repository contains two main branches:

<dl class="row">
    <dt class="col-xl-1 col-sm-2">master</dt>
    <dd class="col-xl-11 col-sm-10">This is the main branch and reflects the production-ready state of the project.</dd>
    <dt class="col-xl-1 col-sm-2">develop</dt>
    <dd class="col-xl-11 col-sm-10">This branch contains the latest development changes for the next release.</dd>
</dl>

When you create a new pull request, it is important to select the correct branch to merge your changes into.  If you are patching a critical and breaking bug in the production code, you should merge into the **master** branch.  These issues will be labeled with the **critical** label.  *Remember, you will need to bump the version number up a patch before your pull request will be accepted.*  All other feature requests or bug fixes should be merged in **develop**.  Anything merged into the **develop** branch will be packaged and released at our next release date.  We release on a monthly release cycle.  For more details about this branching strategy, check out [this article](https://nvie.com/posts/a-successful-git-branching-model/).

### Code Styling

As developers, we want to ensure our code is written clean and clear for future developers.  In order to ensure the quality of our code, we use [linters](https://en.wikipedia.org/wiki/Lint_(software)){:target="_blank"}, static code analysis tools, to check the quality of the code written.  These linters compare the code written against language specific standards, also known as coding style guides, and verifies that it conforms to that standard.  In the table below, you will see the language specific standards we have decided to implement in our projects.  Please get familiar with the standards before submitting code to our projects.  Each project will outline how to run the linters on their Github wiki page.

{:class="table"}
| Programming Language | Coding Standard |
|----------------------|-----------------|
| Javascript | [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript){:target="_blank"} |
| PHP (No Framework) | [PHP-FIG PSR-12](https://www.php-fig.org/psr/psr-12/) |
| PHP (Laravel) | [PHP-FIG PSR-2](https://www.php-fig.org/psr/psr-2/) |
| Python | [Python's PEP 8](https://www.python.org/dev/peps/pep-0008/) |
| TypeScript | [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript){:target="_blank"} |


### Code Testing

One of the best wants to ensure your code runs correctly all the time, is to back your code with a set of tests.  These tests are run every time we receive a pull requests, and push out the latest release.  Developers can also run these tests locally in order to ensure the code they are introducing does not break another piece of code.  **All pull requests must contain at least one test to ensure the code is working properly**.  Each project will outline which frameworks they use for testing and instructions on how to run the tests in their Github wiki page.

### Code Versioning

In order to track the versions of our code, we use the [Semantic Versioning](https://semver.org/) technique.  Only critical bug fixes will need to change the version number by incrementing it one PATCH.  Each project will outline how to increment the versioning in their Github wiki page.

### Code Documentation

In order to maintain an understanding of the code and how it works for future development, it is important to correctly document all of the code’s functionality. This allows any developer to assess the purpose of certain functionality and address any concerns in the code.  **All pull requests require code to be commented.**  Each project will outline how to comment your code in their Github wiki page.

To insure the free access to our code, we release all of our code under the [GNU General Public License (version 3)](http://www.gnu.org/licenses/gpl-3.0-standalone.html).  As part of the licensing requirements, all new files need to include the licensing header comment.  **All pull requests with new files must add this comment block at the top of the file**:

```
/**
 * This file is part of PROJECT NAME.
 *
 * PROJECT NAME is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * PROJECT NAME is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see
 * <http://www.gnu.org/licenses/>.
 *
 * @author AUTHOR <AUTHOR EMAIL>
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 */
```

Please replace PROJECT NAME, AUTHOR, and AUTHOR EMAIL with the correct values.

### Pull Request Checklist

Before submitting a pull request, please verify that you have completed the following requirements:

- I have performed a self-review of my own code.
- I have run the project's linter, and my code has passed.
- I have written at least one test for the new code.
- I have run the tests according to the project's documentation, and my code has passed the test.
- I have well documented my code so another developer can understand what is happening.
- If I am patching a critical bug, I have correctly bumped the version number.
- I have included the licensing information on all my new files.
- I have added my Github username and profile link to the CONTRIBUTORS.md file of the project.
- I have squashed my commits into as few commits as possible

If everything passes, then you are ready to create your pull request.  Happy coding!
