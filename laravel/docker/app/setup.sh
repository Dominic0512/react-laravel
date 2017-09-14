#!/bin/sh

# This script sets up OS-level config. This script is run by Dockerfile before the Project dir is copied over.

echo "-----------------------"
echo "START setup.sh"
echo "-----------------------"

cd /var/www/src
php artisan key:generate
