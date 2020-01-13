for file in out/*.html; do
    if [ $(basename "${file}") != "index.html" ]; then
    mv -- "$file" "${file%%.html}"
    fi
done
