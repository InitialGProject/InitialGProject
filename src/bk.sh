#!/bin/bash
# Bash Menu Script Example
FILE1=/var/www/html/InitialG_API.bk
FILE2=/var/www/html/initialg_back.bk

if [ -d "$FILE1" ]; then
	echo "Existe backup de API, borrando"
	rm -r InitialG_API.bk
fi
if [ -d "$FILE2" ]; then
	echo "Existe backup del Back, borrando"
	rm -r initialg_back.bk
fi
echo "Generando nuevo backup de todo"
cp -r InitialG_API InitialG_API.bk			
cp -r InitialG_API initialg_back.bk
            