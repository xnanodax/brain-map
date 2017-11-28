json.set! @studyscore.learning_score do
  json.partial! './api/studyscore/studyscore', studyscore: @studyscore
end
