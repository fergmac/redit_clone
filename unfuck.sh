# NPM Unfuck

# Brought to you by:
# Mackenzie Kieran  & Shawn McKay

# remove deps
rm -rf node_modules
npm cache clean

# lock dependencies
sed -i '.bak' 's/"^/"/' package.json

# reinstall node_modules
if which yarn > /dev/null; then
	yarn
else
	npm i
fi

# say complete
say "done!"
