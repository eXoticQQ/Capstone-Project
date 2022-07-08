class LargeCoverUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick
process :resize_to_fill => [665, 375] # the defualt image size
# Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end
end