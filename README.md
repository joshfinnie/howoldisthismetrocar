## Tests

Tests use Node v 0.10.20 and NPM v .

    $ node --version
    v0.10.20

    $ npm --version
    1.3.11

## Hosting

Hosting is done on AWS S3.

    s3cmd sync --add-header='Cache-Control: max-age=31536000' app/ s3://www.howoldisthismetrocar.com