
# Check if a commit message is provided
if [ -z "$1" ]; then
    echo "Error: Commit message is required."
    echo "Usage: ./deploy.sh \"Your commit message\""
    exit 1
fi

# Run Git commands
git status
git add .
git commit -m "$1"
git push

# Run build and deploy commands
npm run build
npm run deploy