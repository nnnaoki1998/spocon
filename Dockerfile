FROM ruby:2.7.5
RUN apt-get update -qq && apt-get install -y build-essential nodejs
RUN mkdir /gem
WORKDIR /gem
COPY Gemfile /gem/Gemfile
COPY Gemfile.lock /gem/Gemfile.lock
RUN bundle install
