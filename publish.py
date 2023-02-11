import os
import sys
import webbrowser

length_of_arguments = len(sys.argv)
git_commit_message = " ".join(sys.argv[1:])


def error():
    print("\033[1;31m" "Could not publish site. Deploy failed." "\x1b[0m")
    sys.exit()


def success():
    print("\x1b[6;30;42m" "Success! Site is now being deployed." "\x1b[0m")
    webbrowser.open("https://seed2sprout.netlify.app/")
    webbrowser.open("https://app.netlify.com/sites/seed2sprout/overview/")
    sys.exit()


def push_to_github():
    os.system("git add .")

    text = f'git commit -m "{git_commit_message}"'
    os.system(text)
    os.system("git push origin main")

def deploy():
    try:
        push_to_github()
        # success()
    except:
        sys.exit()


try:
    deploy()
except:
    sys.exit()