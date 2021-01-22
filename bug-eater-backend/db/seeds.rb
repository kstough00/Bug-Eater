# Faker::Quote.famous_last_words #=> "My vocabulary did this to me. Your love will let you go on…"

# Faker::Quote.jack_handey #=> "I hope life isn't a big joke, because I don't get it."

# Faker::Quote.matz #=> "You want to enjoy life, don't you? If you get your job done quickly and your job is fun, that's good isn't it? That's the purpose of life, partly. Your life is better."

# Faker::Quote.most_interesting_man_in_the_world #=> "He can speak Russian… in French"

# Faker::Quote.robin #=> "Holy Razors Edge"

# Faker::Quote.singular_siegler #=> "Texas!"

# Faker::Quote.yoda #=> "Use your feelings, Obi-Wan, and find him you will."

10.times do
    Bug.create(title: Faker::Movie.title, 
        description:Faker::Movie.quote, 
        severity:Faker::Number.number(digits: 5), 
        resolved:false)
end