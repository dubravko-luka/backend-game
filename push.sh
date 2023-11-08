echo You want to upload branch?
read branch;
echo What is your message?
read message;
git config --global user.email "dev.richard.npm98@gmail.com"
git add .
git commit -a -m "$message"
git push origin $branch
echo you pushed to $branch branch with message: $message;