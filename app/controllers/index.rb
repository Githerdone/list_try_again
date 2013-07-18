get '/' do
  @items = Item.all
  @items.sort! { |a,b| a.position <=> b.position }
  erb :index
end

post '/post_item' do
  Item.create(name: params[:add_item][:item], position: 0)
  redirect ('/')
end

post '/change_list' do
  if params[:sorted_list] == nil
   content_type :json
   { response: true }.to_json
 else
    params[:sorted_list].each_with_index do |index, position|
      Item.find(index).update_attributes(position: position)
    end
  end
end

get '/delete_item/:id' do |id|
  Item.find(id).destroy
  redirect ('/')
end


