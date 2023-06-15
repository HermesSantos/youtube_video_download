from pytube import YouTube

url = "https://www.youtube.com/watch?v=G3e-8EWdv8c"

yt = YouTube(url)
print('Por favor, aguarde')
video = yt.streams.filter(file_extension='mp4').first()
directory = './'

# Faz o download do vídeo
video.download(directory)
print('Concluído')