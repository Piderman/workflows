# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# guard 'sass', :input => 'standard/styles', :output => 'standard/styles'


# This will concatenate the javascript files specified in :files to public/js/all.js
guard :concat, type: "js", files: %w(init main helpers cr03 breadcrumb), input_dir: "standard/scripts", output: "standard/scripts/main"

guard 'livereload', :grace_period => 0.8 do
  watch(%r{.+\.(html | js | css)$})
end
 