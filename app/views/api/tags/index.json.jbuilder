# @tags.each do |tag|
#   json.set! tag.name do
#     json.extract! tag, :id
#   end
# end

json.extract! @tag, :id, :name
