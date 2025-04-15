- name: Create test script
  run: |
    mkdir -p data/images
    echo "console.log('Creazione directory per immagini completata');" > test.js
    
- name: Execute test script
  run: node test.js
