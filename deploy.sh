#!/bin/sh

DEST=ldp.ovh:/var/www/vinci-subscription/

RSYNC_OPTIONS="--checksum --recursive --verbose --delete-after"

die() { echo "$*" 1>&2 ; exit 1; }

ng build --prod --base-href ./ || die "[ERROR] Unable to build the application"

rsync $RSYNC_OPTIONS ./dist/subscription/ $DEST

