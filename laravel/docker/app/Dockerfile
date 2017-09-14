FROM php:7-fpm

MAINTAINER Dominic Lee <dominiclee0512@gmail.com>

# Install basic package for Laravel with agt-get
RUN apt-get update && apt-get install -y libmcrypt-dev \
    mysql-client \
    curl \
    git \
    zip \
    unzip \
    libmagickwand-dev --no-install-recommends \
    && pecl install imagick \
    && docker-php-ext-enable imagick \
    && docker-php-ext-install mcrypt pdo_mysql

# Install composer package with curl
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install basic package for ReactJS with apt-get
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN npm install -g yarn


# Add setup shell script
# ADD ./setup.sh /usr/local/bin/setup.sh
# RUN chmod +x /usr/local/bin/setup.sh
# CMD ['/usr/local/bin/setup.sh']

WORKDIR /var/www/
